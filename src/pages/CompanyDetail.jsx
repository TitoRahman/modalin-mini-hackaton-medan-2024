import React from "react";
import { useParams } from "react-router-dom";
import { getDummyCompanyById } from "../helper/dummyData";
import IntToRupiah from "../helper/IntToRupiah";

export default function CompanyDetail() {
  const { id } = useParams();
  const [company, setCompany] = React.useState(null);
  const [prediction, setPrediction] = React.useState(null);

  // Function to get the highest probability class
  const getHighestProbabilityClass = (classes, scores) => {
    if (!classes || !scores || classes.length !== scores.length) return null;

    const maxScoreIndex = scores.reduce(
      (maxIndex, score, index, arr) =>
        score > arr[maxIndex] ? index : maxIndex,
      0
    );

    return {
      className: classes[maxScoreIndex],
      score: scores[maxScoreIndex],
    };
  };

  // Color and background mapping for risk levels
  const getRiskLevelStyles = (className) => {
    switch (className) {
      case "Low":
        return {
          textColor: "text-red-700",
          bgColor: "bg-red-100",
          borderColor: "border-red-300",
        };
      case "High":
        return {
          textColor: "text-green-700",
          bgColor: "bg-green-100",
          borderColor: "border-green-300",
        };
      case "Moderate":
      default:
        return {
          textColor: "text-orange-700",
          bgColor: "bg-orange-100",
          borderColor: "border-orange-300",
        };
    }
  };

  React.useEffect(() => {
    const companyData = getDummyCompanyById(id);
    setCompany(companyData);

    if (companyData) {
      const queryParams = new URLSearchParams({
        industry: companyData.industry,
        sub_industry: companyData.sub_industry,
        company_category: companyData.company_category,
        sales_growth_projection: companyData.sales_growth_projection,
        credit_financing_needs: companyData.credit_financing_needs,
        total_assets: companyData.total_assets,
        average_annual_sales: companyData.average_annual_sales,
        profit_or_loss: companyData.profit_or_loss,
        competition_level: companyData.competition_level,
      }).toString();

      fetch(`http://localhost:8080/predict?${queryParams}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setPrediction(data))
        .catch((error) => console.error("Error fetching prediction:", error));
    }
  }, [id]);

  if (!company) {
    return <h1 className="text-center text-2xl font-bold mt-10">Loading...</h1>;
  }

  // Process prediction if available
  const riskPrediction = prediction
    ? getHighestProbabilityClass(prediction.classes, prediction.scores)
    : null;

  const riskStyles = riskPrediction
    ? getRiskLevelStyles(riskPrediction.className)
    : {};

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          {company.name}
        </h1>
        <img
          className="w-32 h-32 object-cover mb-4 border-2 border-gray-300 shadow-lg rounded-full"
          src={company.logo}
          alt={company.name}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p className="text-lg mb-2">
          <strong className="font-semibold text-gray-700">Location:</strong>{" "}
          {company.location}
        </p>
        <p className="text-lg mb-2">
          <strong className="font-semibold text-gray-700">Industry:</strong>{" "}
          {company.industry}
        </p>
        <p className="text-lg mb-2">
          <strong className="font-semibold text-gray-700">Sub Industry:</strong>{" "}
          {company.sub_industry}
        </p>
        <p className="text-lg mb-2">
          <strong className="font-semibold text-gray-700">
            Company Category:
          </strong>{" "}
          {company.company_category}
        </p>
        <p className="text-lg mb-2">
          <strong className="font-semibold text-gray-700">
            Sales Growth Projection:
          </strong>{" "}
          {company.sales_growth_projection}
        </p>
        <p className="text-lg mb-2">
          <strong className="font-semibold text-gray-700">
            Credit Financing Needs:
          </strong>{" "}
          {IntToRupiah(company.credit_financing_needs)}
        </p>
        <p className="text-lg mb-2">
          <strong className="font-semibold text-gray-700">Total Assets:</strong>{" "}
          Rp {IntToRupiah(company.total_assets)}
        </p>
      </div>
      <div className="mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
          Purchase
        </button>
      </div>

      <div className="mt-10 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          ML Model Prediction
        </h2>
        {prediction ? (
          <div
            className={`p-4 rounded-lg border ${riskStyles.bgColor} ${riskStyles.borderColor}`}
          >
            <h3 className={`text-xl font-semibold ${riskStyles.textColor}`}>
              Risk Level: {riskPrediction.className}
            </h3>
          </div>
        ) : (
          <p className="text-lg text-gray-700">Loading prediction...</p>
        )}
      </div>
    </div>
  );
}
