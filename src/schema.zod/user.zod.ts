import { TypeOf, z } from "zod";

export const Usertype = z.object({
    
        body: z.object({
            //--------- UserName--------------//
            name: z
            .string({ required_error: "name is required",
                        invalid_type_error: "name is required" })
            .min(3, "name must be mare than or equal 3 char"),
            //--------- UserEmail--------------//
            email: z
            .string({
                required_error: "email is required",
            })
            .email(),
            //--------- UserPass--------------//
            password: z
            .string({ required_error: "password is required",
                        invalid_type_error: "password is required" })
            .min(6, "password must be mare than or equal 6 char"),
        }),
        });


export type Usertypeschema = TypeOf<typeof Usertype>["body"]