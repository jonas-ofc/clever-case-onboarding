import axios from "axios";
import type { Step } from "@/interfaces/interfaces";

export async function fetchSteps(): Promise<Step[]> {
  try {
    const response = await axios.get<Step[]>("data/steps.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching steps:", error);
    return [];
  }
}
