import getAllExercises from "../../../controllers/getAllExercises";
import postNewExercises from "../../../controllers/postNewExercises";

export async function GET(request) {
  try {
    const data = await getAllExercises();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}

export async function POST(request) {
  try {
    const newExercise = await request.json();
    const response = await postNewExercises({ newExercise });
    return new Response(JSON.stringify(response), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}
