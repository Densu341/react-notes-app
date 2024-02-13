import React, { useContext } from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import LocaleContext from "../../contexts/LocaleContext";

function LoginInput({ login }) {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const { locale } = useContext(LocaleContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <form className="space-y-4" onSubmit={onSubmitHandler}>
      <input
        className="form-control"
        placeholder="Email"
        type="text"
        value={email}
        onChange={setEmail}
      />
      <input
        className="form-control"
        placeholder={locale === "id" ? "Kata Sandi" : "Password"}
        type="password"
        value={password}
        onChange={setPassword}
      />
      <button className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        {locale === "id" ? "Masuk" : "Login"}
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
