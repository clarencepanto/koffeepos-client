import "./Authentication.scss";
import { Button, Card, Label, TextInput } from "flowbite-react";

function Authentication() {
  return (
    <div className="auth-container auth ">
      <h1 className="text-4xl  auth__header">Welcome to KOFFEEPOS!</h1>
      <Card className="max-w-100 opacity-90 z-10 auth__card">
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username">Username</Label>
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="barista123"
              className="auth__input"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password">Password</Label>
            </div>
            <TextInput
              id="password"
              type="password"
              className="auth__input"
              required
            />
          </div>
          <Button className="auth__button" type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Authentication;
