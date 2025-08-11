import mongoose from 'mongoose';
import { TSudoUser } from './auth.types';
import bcrypt from 'bcryptjs';

const AdminSchema = new mongoose.Schema<TSudoUser>({
  nickname: { type: String, required: true, default:'' },
  password: { type: String, required: true, default:'' },
  phrase: { type: String, required: true, default:'' },
  role: {type: String, default: 'sudo'},
});

AdminSchema.pre('save', async function (next) {
  if (!this.isModified('password') && !this.isModified('phrase')) {
    return next();
        
  }
    
  if (!this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  if (!this.isModified('phrase')) {
    this.password = await bcrypt.hash(this.phrase, 10);
  }

  next();
});

const SudoUser = mongoose.model('SudoUser', AdminSchema);

export default SudoUser;