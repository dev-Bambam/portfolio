import mongoose from 'mongoose';
import { TBio } from '../Types/bio.types';

const BioSchema = new mongoose.Schema<TBio>({
  name: { type: String, default: '' },
  summary: { type: String, default: '' },
  fullBio: {
    type: String,
    default: '',
  },
  profileImageUrl: {
    type: String,
    default: '',
  },
  socialLinks: [
    {
      name: { type: String, required: true, default: '' },
      url: { type: String, required: true, default: '' },
    },
  ],
  certificates: [
    {
      institution: { type: String, default:'' },
      certImageUrl: { type: String, default:'' },
    },
  ],
});

const Bio = mongoose.model('Bio', BioSchema);

export default Bio;
