import complaintsService from "../services/complaints.service.js";

export async function getComplaints(req, res) {
  try {
    const complaints = await complaintsService.getComplaints();
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

export async function createComplaint(req, res) {
  const { category, message } = req.body;
  const complaint = await complaintsService.createComplaint({category, message});
  res.status(201).json(complaint);


}
