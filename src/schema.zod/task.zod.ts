import { TypeOf, z } from "zod";

export const Tasktype = z.object({
    
        body: z.object({
            //--------- TaskName--------------//
            title: z
            .string({ required_error: "title is required",
                        invalid_type_error: "title is required" })
            .min(3, "title must be mare than or equal 3 char"),
            //--------- TaskRating--------------//
            // isCompleted: z.boolean(),
        }),
        params: z.object({
            userId: z
            .string({
                required_error: "user ID is required",
            })
            .min(10, "user ID must be mare than 10 char"),
        })
        });


export type Tasktypeschema = TypeOf<typeof Tasktype>["body"]