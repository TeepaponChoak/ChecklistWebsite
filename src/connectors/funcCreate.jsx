import pb from "./pb";

async function insetUserData(email, password) {
  const data = {
    email: email,
    password: password,
  };

  const record = await pb.collection("login").create(data);
  return record;
}
export default insetUserData;
