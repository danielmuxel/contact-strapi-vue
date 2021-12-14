import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:1337/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getContacts() {
    return apiClient.get("/contacts");
  },
  getContact(id) {
    return apiClient.get(`/contacts/${id}`);
  },
  postContact(contact) {
    return apiClient.post("/contacts", { data: contact });
  },
  putContact(contact) {
    return apiClient.put(`/contacts/${contact.id}`, { data: contact });
  },
  deleteContact(id) {
    return apiClient.delete(`/contacts/${id}`);
  },
};
