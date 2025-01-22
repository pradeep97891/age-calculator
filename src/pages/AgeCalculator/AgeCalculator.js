import React, { useState } from "react";
import { DatePicker, Button, Card, Typography } from "antd";
import dayjs, { Dayjs } from "dayjs";

const { Title, Text } = Typography;

const AgeCalculator = () => {
  const [dob, setDob] = useState(null); // State to store the date of birth
  const [age, setAge] = useState(null); // State to store the calculated age

  const calculateAge = () => {
    if (!dob) {
      alert("Please select a date of birth");
      return;
    }

    const today = dayjs();
    const birthDate = dob;

    let years = today.year() - birthDate.year();
    let months = today.month() - birthDate.month();

    // Adjust if the current month/day is earlier than the birth month/day
    if (months < 0) {
      years--;
      months += 12;
    }

    if (today.date() < birthDate.date()) {
      months--;
      if (months < 0) {
        years--;
        months += 12;
      }
    }

    setAge({ years, months });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <Card style={{ width: 400, textAlign: "center" }}>
        <Title level={3}>Age Calculator</Title>
        <DatePicker
          onChange={(date) => setDob(date)}
          format="YYYY-MM-DD"
          style={{ width: "100%", marginBottom: "20px" }}
          placeholder="Select your date of birth"
        />
        <Button
          type="primary"
          onClick={calculateAge}
          style={{ width: "100%", marginBottom: "20px" }}
        >
          Calculate Age
        </Button>
        {age !== null && (
          <Text type="success" style={{ fontSize: "16px" }}>
            <strong>Your Age: </strong> {age.years} years and {age.months} months
          </Text>
        )}
      </Card>
    </div>
  );
};

export default AgeCalculator;
