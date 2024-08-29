import { useState, useEffect } from "react";
import { ethers } from "ethers";
import grading_abi from "../artifacts/contracts/SchoolGradingSystem.sol/SchoolGradingSystem.json";

export default function GradingSystemPage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [gradingSystem, setGradingSystem] = useState(undefined);
  const [studentAddress, setStudentAddress] = useState("");
  const [studentName, setStudentName] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState(0);
  const [fetchedGrade, setFetchedGrade] = useState(undefined);

  const contractAddress = "0xYourDeployedContractAddress"; // Replace with your deployed contract address
  const gradingABI = grading_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const accounts = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(accounts);
    }
  };

  const handleAccount = (accounts) => {
    if (accounts.length > 0) {
      setAccount(accounts[0]);
    } else {
      console.log("No account found");
    }
  };

  const getGradingSystemContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, gradingABI, signer);
    setGradingSystem(contract);
  };

  const addStudent = async () => {
    if (gradingSystem && account) {
      try {
        const transaction = await gradingSystem.addStudent(studentAddress, studentName);
        await transaction.wait();
        console.log("Student added: ", studentAddress);
      } catch (error) {
        console.error("Error adding student: ", error);
      }
    }
  };

  const assignGrade = async () => {
    if (gradingSystem && account) {
      try {
        const transaction = await gradingSystem.assignGrade(studentAddress, subject, grade);
        await transaction.wait();
        console.log(`Assigned grade ${grade} for ${subject} to student ${studentAddress}`);
      } catch (error) {
        console.error("Error assigning grade: ", error);
      }
    }
  };

  const getGrade = async () => {
    if (gradingSystem && account) {
      try {
        const fetchedGrade = await gradingSystem.getGrade(studentAddress, subject);
        setFetchedGrade(fetchedGrade);
      } catch (error) {
        console.error("Error fetching grade: ", error);
      }
    }
  };

  useEffect(() => {
    getWallet();
  }, []);

  useEffect(() => {
    if (account) {
      getGradingSystemContract();
    }
  }, [account]);

  return (
    <div>
      <h1>School Grading System</h1>

      {/* Add Student */}
      <div>
        <h2>Add Student</h2>
        <input
          type="text"
          placeholder="Student Address"
          value={studentAddress}
          onChange={(e) => setStudentAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      {/* Assign Grade */}
      <div>
        <h2>Assign Grade</h2>
        <input
          type="text"
          placeholder="Student Address"
          value={studentAddress}
          onChange={(e) => setStudentAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="number"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(parseInt(e.target.value))}
        />
        <button onClick={assignGrade}>Assign Grade</button>
      </div>

      {/* View Grade */}
      <div>
        <h2>View Grade</h2>
        <input
          type="text"
          placeholder="Student Address"
          value={studentAddress}
          onChange={(e) => setStudentAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <button onClick={getGrade}>View Grade</button>
        {fetchedGrade !== undefined && (
          <p>
            Grade for {subject}: {fetchedGrade}
          </p>
        )}
      </div>
    </div>
  );
}
