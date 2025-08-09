import mongoose from 'mongoose';
import { TBio } from '../Types/bio.types';

const BioSchema = new mongoose.Schema<TBio>({
  name: { type: String, default: undefined },
  summary: { type: String, default: undefined },
  fullBio: {
    type: String,
    default: undefined,
  },
  profileImageUrl: {
    type: String,
    default: undefined,
  },
  socialLinks: [
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  certificates: [
    {
      institution: { type: String },
      certImageUrl: { type: String },
    },
  ],
});

const Bio = mongoose.model('Bio', BioSchema);

export default Bio;
