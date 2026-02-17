import complaintsService from "../services/complaints.service.js";

export async function getComplaints(req, res) {
  const complaints = await complaintsService.getComplaints();
  res.send(complaints);
}

export async function createComplaint(req, res) {
  const { category, message } = req.body;
  const complaint = await complaintsService.createComplaint({category, message});
  res.status(201).json(complaint);
}
