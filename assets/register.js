// 구글 Apps Script 웹 앱 주소. 설치안내.md "현재 연결 상태"의 웹 앱 URL을 따옴표 안에 붙여 넣으면 접수가 열립니다.
// 비워 두면 테스트 모드로 동작합니다(신청 내용이 어디에도 저장되지 않음). 지금은 미리보기 기간이라 비워 둠.
const REGISTRATION_ENDPOINT = "";

const form = document.getElementById("reg-form");
const errorBox = document.getElementById("form-error");
const submitBtn = document.getElementById("submit-btn");

const REQUIRED_MESSAGES = {
  name: "이름을 입력해 주세요.",
  phone: "휴대전화 번호를 입력해 주세요.",
  email: "이메일을 입력해 주세요.",
  org: "소속 기관을 입력해 주세요.",
  sector: "소속 구분을 선택해 주세요.",
  lunch: "점심 도시락 신청 여부를 선택해 주세요.",
  agreePrivacy: "개인정보 수집·이용에 동의해 주세요.",
};

function showError(message) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

function markInvalid(name, invalid) {
  const el = form.elements[name];
  const target = el instanceof RadioNodeList ? el[0].closest(".field") : el.closest(".check") || el;
  target.classList.toggle("is-invalid", invalid);
}

function validate(data) {
  const errors = [];
  for (const [name, message] of Object.entries(REQUIRED_MESSAGES)) {
    const empty = name === "agreePrivacy" ? !data.agreePrivacy : !data[name];
    markInvalid(name, empty);
    if (empty) errors.push(message);
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    markInvalid("email", true);
    errors.push("이메일 형식을 확인해 주세요.");
  }
  if (data.phone && data.phone.replace(/\D/g, "").length < 9) {
    markInvalid("phone", true);
    errors.push("휴대전화 번호를 확인해 주세요.");
  }
  return errors;
}

function collect() {
  const fd = new FormData(form);
  const data = {};
  for (const [key, value] of fd.entries()) data[key] = String(value).trim();
  data.agreePrivacy = form.elements.agreePrivacy.checked;
  data.agreeNews = form.elements.agreeNews.checked;
  return data;
}

function showDone(name, id) {
  document.getElementById("done-name").textContent = name;
  document.getElementById("done-id").textContent = id;
  form.hidden = true;
  const done = document.getElementById("reg-done");
  done.hidden = false;
  done.scrollIntoView({ behavior: "smooth", block: "center" });
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorBox.hidden = true;

  const data = collect();
  const errors = validate(data);
  if (errors.length) {
    showError(errors[0]);
    const firstInvalid = form.querySelector(".is-invalid");
    (firstInvalid.matches("input") ? firstInvalid : firstInvalid.querySelector("input")).focus();
    return;
  }

  if (!REGISTRATION_ENDPOINT) {
    showDone(data.name, "TEST-0000 (테스트 모드: 저장되지 않음)");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "보내는 중…";
  try {
    // text/plain으로 보내야 Apps Script가 별도 사전 요청 없이 받습니다.
    const res = await fetch(REGISTRATION_ENDPOINT, { method: "POST", body: JSON.stringify(data) });
    const result = await res.json();
    if (result.ok) {
      showDone(data.name, result.id);
    } else {
      showError(result.message || "등록 중 문제가 생겼습니다. 잠시 후 다시 시도해 주세요.");
    }
  } catch (err) {
    showError("서버와 연결하지 못했습니다. 잠시 후 다시 시도하거나 문의처로 연락해 주세요.");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "사전등록 신청";
  }
});

// 입력을 고치면 빨간 표시를 지웁니다.
form.addEventListener("input", (event) => {
  const name = event.target.name;
  if (name in REQUIRED_MESSAGES || name === "email" || name === "phone") markInvalid(name, false);
});
