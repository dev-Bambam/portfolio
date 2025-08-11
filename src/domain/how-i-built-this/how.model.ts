import { model, Schema } from "mongoose";
import { THowIBuiltThis } from "./how.types";

const HowIBuiltThisSchema: Schema = new Schema({
   architectureOverview: { type: String, required: true, default: "" },
   backendStack: {
      framework: { type: String, required: true, default: "" },
      database: { type: String, required: true, default: "" },
      orm: { type: String, required: true, default: "" },
      realtime: { type: String, required: true, default: "" },
   },
   frontendStack: {
      framework: { type: String, required: true, default: "" },
      styling: { type: String, required: true, default: "" },
   },
   keyFeatures: {
      realtime: { type: String, required: true, default: "" },
      asynchronous: { type: String, required: true, default: "" },
      security: { type: String, required: true, default: "" },
   },
   deployment: {
      containerization: { type: String, required: true, default: "" },
      ciCd: { type: String, required: true, default: "" },
   },
});

const HowIBuiltThisModel = model<THowIBuiltThis>("HowIBuiltThis", HowIBuiltThisSchema);

export default HowIBuiltThisModel;
