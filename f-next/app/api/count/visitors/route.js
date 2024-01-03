import { Visitor } from "@/utils/models/visitors";
import { connectToDB } from "@/utils/dataBase";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const visitor = await Visitor.findOne({});

    return new Response(JSON.stringify(visitor.counts.length), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response("error in count", { status: 500 });
  }
};

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const visitor = await Visitor.findOne({});
    if (visitor) {
      visitor.counts.push("Prashant");
      await visitor.save();
    } else {
      const newVisitor = new Visitor({ counts: ["Prashant"] });
      await newVisitor.save();
    }
    return new Response(
      JSON.stringify({ message: "Visitor increment success" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response("error in visitior count", { status: 500 });
  }
};
