import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Product {
  @Field(() => ID, { nullable: true })
  id: number

  @Field(() => String, { nullable: true })
  name: string
}
