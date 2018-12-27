import mongoose from 'mongoose';
const { Schema } = mongoose;

const complimentSchema = new Schema ({
  compliment: String,
  toStaffMember: String,
});

export const Compliment = mongoose.model('compliment', complimentSchema);
