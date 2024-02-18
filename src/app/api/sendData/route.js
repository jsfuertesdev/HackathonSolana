import User from "../../../models/Users";
import Sports from "../../../models/Sports";
import Exercises_use_sports from "../../../models/Exercises_use_sports";

export async function GET(request) {
  await Sports.findAll();
  const data = await Exercises_use_sports.findAll();
  return new Response("Hello, from API!", data);
}
