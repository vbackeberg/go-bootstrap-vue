import { Assignment, returnedAssignments } from "@/services/data/assignments";
import { Boid, returnedBoids } from "@/services/data/boids";
export class HttpService {
  public static getBoids(): Promise<Boid[]> {
    return this.delay(returnedBoids);
  }

  public static async getAssignments(): Promise<Assignment[]> {
    return this.delay(returnedAssignments);
  }

  private static delay<T>(returnValue: T): Promise<T> {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(returnValue);
      }, Math.random() * 1000 + 1000);
    });
  }
}
