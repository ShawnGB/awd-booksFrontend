import { useState } from "react";

export default function HomeComponent() {
  const [login, setLogin] = useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section>
      <form>
        <input type="text" name="username" id="" onChange={handleInputChange} />
        <input type="email" name="email" id="" onChange={handleInputChange} />
        <input type="submit" value="Create Account" />
      </form>
    </section>
  );
}
