import complaintsService from "../services/complaints.service.js";

export async function getComplaints(req, res) {
  const complaints = await complaintsService.getComplaints();
  res.send(complaints);
}
