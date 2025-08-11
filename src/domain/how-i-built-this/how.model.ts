import { model, Schema } from "mongoose";
import { THowIBuiltThis } from "./how.types";

const HowIBuiltThisSchema: Schema = new Schema({
   architectureOverview: { type: String, required: true },
   backendStack: {
      framework: { type: String, required: true },
      database: { type: String, required: true },
      orm: { type: String, required: true },
      realtime: { type: String, required: true },
   },
   frontendStack: {
      framework: { type: String, required: true },
      styling: { type: String, required: true },
   },
   keyFeatures: {
      realtime: { type: String, required: true },
      asynchronous: { type: String, required: true },
      security: { type: String, required: true },
   },
   deployment: {
      containerization: { type: String, required: true },
      ciCd: { type: String, required: true },
   },
});

 const HowIBuiltThisModel = model<THowIBuiltThis>("HowIBuiltThis", HowIBuiltThisSchema);


 export default HowIBuiltThisModel