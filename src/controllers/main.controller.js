import mainService from "../services/main.service.js";

async function greet(_, res) {
  const message = mainService.greet();
  return res.status(200).json({
    message,
  });
}

export default {
  greet,
};
