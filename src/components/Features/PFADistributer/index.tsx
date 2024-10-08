"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import { useState } from "react";

type Team = string[]; // A team consists of an array of members
type Assignment = { team: Team; subject: string }; // Assignment structure

const PFADistributer = () => {
  const [subjects, setSubjects] = useState<string[]>([]);
  const [choosenSubject, setChoosenSubject] = useState<string>("");
  const [teams, setTeams] = useState<Team[]>([]);
  const [choosenTeam, setChoosenTeam] = useState<Team>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  /**
   * Choose a team randomly from the list of available teams
   *
   * @returns {void}
   */
  const chooseRandomTeam = () => {
    const randomIndex = Math.floor(Math.random() * teams.length);
    setChoosenTeam(teams[randomIndex]);
  };

  /**
   * Assign a team to a subject
   *
   * @returns {void}
   */
  const handleAssignment = () => {
    if (choosenTeam.length === 0 || choosenSubject === "")
      return alert("Please choose a team and a subject");

    // Remove the team from the available teams
    const newTeams = teams.filter((team) => team !== choosenTeam);
    setTeams(newTeams);

    // Remove the selected subject from the available subjects
    const newSubjects = subjects.filter(
      (subject) => subject !== choosenSubject,
    );
    setSubjects(newSubjects);

    // Add the assignment to the list of assignments
    setAssignments([
      ...assignments,
      { team: choosenTeam, subject: choosenSubject },
    ]);

    // Reset the choosen team and subject
    setChoosenTeam([]);
    setChoosenSubject("");
  };

  /**
   * Export the assignments to a CSV file
   *
   * @returns {void}
   */
  const exportAssignments = () => {
    let csv = "Team;Subject\n";
    assignments.forEach((assignment) => {
      assignment.team = assignment.team.map((member) => member.trim());
      assignment.subject = assignment.subject.trim();
      csv += `${assignment.team.join(",")};${assignment.subject}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "assignments.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  /**
   * Import the list of teams from a CSV file
   *
   * @param {File} file - The CSV file containing the list of teams
   * @returns {void}
   */
  const importTeams = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result as string;
      const teams = content.split("\n").map((line) => line.split(","));
      setTeams(teams);
    };
    reader.readAsText(file);
  };

  /**
   * Import the list of subjects from a CSV file
   *
   * @param {File} file - The CSV file containing the list of subjects
   * @returns {void}
   */
  const importSubjects = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result as string;
      const subjects = content.split("\n");
      setSubjects(subjects);
    };
    reader.readAsText(file);
  };

  return (
    <section id="pfa-distributer" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="PFA Distributer"
          paragraph="Choose a team and assign it to a subject"
          center
        />

        <div className="mb-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Available Teams</h2>
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="teams_file"
            >
              Upload file
            </label>
            <input
              className="mb-4 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
              id="teams_file"
              type="file"
              accept=".csv"
              onChange={(e) => importTeams(e.target.files[0])}
            />

            <div className="relative overflow-x-auto shadow-md shadow-md sm:rounded-lg">
              <table className="w-full table-fixed text-center text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="w-[10%] py-3">ID</th>
                    <th className="py-3">Member&nbsp;1</th>
                    <th className="py-3">Member&nbsp;2</th>
                    <th className="py-3">Member&nbsp;3</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.length > 0 ? (
                    teams.map((team, index) => (
                      <tr
                        key={index}
                        className="odd:bg-white even:bg-gray-100 odd:dark:bg-dark even:dark:bg-black"
                      >
                        <td>{index + 1}</td>
                        {team.map((member, memberIndex) => (
                          <td key={memberIndex}>{member}</td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4}>No teams available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {teams.length <= subjects.length ? (
              <>
                <button
                  className="mt-4 rounded-md bg-primary/90 px-4 py-2 text-white"
                  onClick={chooseRandomTeam}
                >
                  Choose Random Team
                </button>
                <div className="mt-4 text-center">
                  <p className="rounded-lg bg-gray-50 py-8 text-sm text-gray-900 dark:bg-gray-700 dark:text-gray-400">
                    {choosenTeam.length > 0
                      ? `Choosen Team: ${choosenTeam.join(", ")}`
                      : "No team choosen"}
                  </p>
                </div>
              </>
            ) : (
              <p className="mt-4 text-red-500">
                Number of teams should be smaller than the number of subjects
              </p>
            )}
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Available Subjects</h2>
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="subjects_file"
            >
              Upload file
            </label>
            <input
              className="mb-4 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
              id="subjects_file"
              type="file"
              accept=".csv"
              onChange={(e) => importSubjects(e.target.files[0])}
            />
            <div className="relative overflow-x-auto shadow-md shadow-md sm:rounded-lg">
              <table className="w-full table-fixed text-center text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="w-[10%] py-3">ID</th>
                    <th className="py-3">Subject</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.length > 0 ? (
                    subjects.map((subject, index) => (
                      <tr
                        key={index}
                        className="odd:bg-white even:bg-gray-100 odd:dark:bg-dark even:dark:bg-black"
                      >
                        <td>{index + 1}</td>
                        <td>{subject}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2}>No subjects available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {teams.length <= subjects.length ? (
              <>
                <select
                  onChange={(e) => setChoosenSubject(e.target.value)}
                  className="mt-4 block w-full rounded-md border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-800"
                >
                  {subjects.map((subject, index) => (
                    <option key={index} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
                <button
                  className="mt-4 rounded-md bg-primary/90 px-4 py-2 text-white"
                  onClick={handleAssignment}
                >
                  Assign Team to Subject
                </button>
              </>
            ) : (
              <p className="mt-4 text-red-500">
                Number of teams should be smaller than the number of subjects
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Assignments</h2>
            <div className="relative overflow-x-auto shadow-md shadow-md sm:rounded-lg">
              <table className="w-full table-fixed text-center text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="w-[10%] py-3">ID</th>
                    <th className="py-3">Team</th>
                    <th className="py-3">Subject</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments.map((assignment, index) => (
                    <tr
                      key={index}
                      className="odd:bg-white even:bg-gray-100 odd:dark:bg-dark even:dark:bg-black"
                    >
                      <td>{index + 1}</td>
                      <td>{assignment.team.join(", ")}</td>
                      <td>{assignment.subject}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {assignments.length > 0 ? (
              <button
                className="mt-4 rounded-md bg-primary/90 px-4 py-2 text-white"
                onClick={exportAssignments}
              >
                Export Assignments
              </button>
            ) : (
              <p className="mt-4 text-red-500">No assignments available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PFADistributer;
