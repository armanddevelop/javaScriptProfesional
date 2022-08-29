class Field {
  errors: string[];
  input: HTMLInputElement;

  constructor(input: HTMLInputElement) {
    this.input = input;
    this.errors = [];

    let errorMessage = document.createElement("p");
    errorMessage.className = "text-danger";
    this.input.parentNode?.insertBefore(errorMessage, this.input.nextSibling);

    this.input.addEventListener("input", () => {
      this.errors = [];
      this.validate();
      errorMessage.innerText = this.errors[0] || "";
    });
  }
  validate() {}
}

function RequiredFieldDecorator(field: Field) {
  let validate = field.validate;
  field.validate = function () {
    validate();
    let value = field.input.value;
    if (!value) {
      field.errors.push("Required");
    }
  };
  return field;
}

function RequiredEmailDecorator(field: Field) {
  let validate = field.validate;
  field.validate = function () {
    validate();
    let value = field.input.value;
    if (value.indexOf("@") === -1) {
      field.errors.push("type a valid email");
    }
  };
  return field;
}

const emailField = document.querySelector("#email") as HTMLInputElement;
let field = new Field(emailField);
field = RequiredFieldDecorator(field);
field = RequiredEmailDecorator(field);
