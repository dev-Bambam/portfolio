import mongoose from "mongoose";
import { TBio } from "../Types/bio.types";

const BioSchema = new mongoose.Schema<TBio>({
   name: {
      type: String,
      required: true,
   },
   summary: {
      type: String,
      requred: true,
   },
   fullBio: {
      type: String,
      required: true,
   },
   profileImageUrl: {
      type: String,
      required: true,
   },
   socialLinks: [
      {
         name: { type: String, required: true },
         url: { type: String, required: true },
      },
   ],
});

const Bio = mongoose.model("Bio", BioSchema);

export default Bio;
