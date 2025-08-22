import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, UserPlus } from "lucide-react";

export default function MembersPage() {
  const members = [
    { id: 1, name: "Amina B.", email: "amina@example.com", phone: "0555 123 456", plan: "CrossFit", status: "Active" },
    { id: 2, name: "Yacine K.", email: "yacine@example.com", phone: "0666 789 123", plan: "Yoga", status: "Active" },
    { id: 3, name: "Sara Z.", email: "sara@example.com", phone: "0777 456 789", plan: "HIIT", status: "Inactive" },
  ];

  return (
    <div className="p-6 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">👥 Membres</h1>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg rounded-xl px-4 py-2">
          <UserPlus className="mr-2 h-4 w-4" /> Nouveau membre
        </Button>
      </div>

      {/* Search bar */}
      <div className="flex items-center bg-[#1f2937] rounded-xl px-4 py-2 mb-6 shadow-lg">
        <Search className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Rechercher un membre..."
          className="bg-transparent w-full outline-none text-white"
        />
      </div>

      {/* Members Table */}
      <Card className="bg-[#1a1f2c] border-0 shadow-lg">
        <CardContent className="p-4 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 text-sm border-b border-gray-700">
                <th className="py-3 px-4">Nom</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Téléphone</th>
                <th className="py-3 px-4">Programme</th>
                <th className="py-3 px-4">Statut</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr
                  key={member.id}
                  className="hover:bg-[#2a3142] transition-colors"
                >
                  <td className="py-3 px-4 font-medium">{member.name}</td>
                  <td className="py-3 px-4">{member.email}</td>
                  <td className="py-3 px-4">{member.phone}</td>
                  <td className="py-3 px-4">{member.plan}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        member.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
