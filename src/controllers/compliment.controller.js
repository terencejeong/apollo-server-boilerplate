import { Compliment } from '../models/Compliment';

export const getCompliments = async(req, res) => {
  try {
    const compliments = await Compliment.find({});
    res.status().send(compliments);
  } catch(e) {
    res.status(400).send('error', e);
  }
};

export const createCompliment = async(req, res) => {
  try {
    const compliment = req.body.compliment;
    const toStaffMember = req.body.toStaffMember;
    const newCompliment = new Compliment({
      compliment,
      toStaffMember
    });
    await newCompliment.save();
    console.log(newCompliment);
    res.status(200).send(newCompliment);
  } catch(e) {
    res.status(400).send('error', e)
  }
};
