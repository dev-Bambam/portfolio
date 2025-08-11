import mongoose from 'mongoose'
import { TSkill } from '../Types/skill.types'

const SkillSchema = new mongoose.Schema<TSkill>({
    name: { type: String, required: true, default: '' },
    proficiency: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
    category:{type: String, required: true}
})

const Skill = mongoose.model('Skill', SkillSchema)

export default Skill