const doctorsData=require("../data")


const getDoctors = async (req, res) => {
  try {
    const body=req.query;
    console.log(body)
    if (body) {
      const filteredDoctors = doctorsData.filter(
        (doct) => doct.city.toLowerCase() == body.selectedCity.toLowerCase()
      );
      res.status(200).json(filteredDoctors);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports={getDoctors}

