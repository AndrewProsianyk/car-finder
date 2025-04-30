import { useEffect, useState } from "react";
import InputSelect from "../inputSelect/InputSelect";
import styles from "./HeroSearchForm.module.scss";
import TextInput from "../textInput/TextInput";
import DollarIcon from "../../assets/icons/DollarIcon";
import Button from "../button/Button";
import SearchIcon from "../../assets/icons/SearchIcon";
import ArrowRight from "../../assets/icons/ArrowRight";
import Pills from "../pills/Pills";
import { Link, useNavigate } from "react-router-dom";
import yearsList from "../../lib/yearsList";
import locationsList from "../../lib/locationsList";
import carData from "../../lib/carData";
import { useSearchStore } from "../../stores/searchStore";
import bodyTypeData from "../../lib/bodyTypeData";

export default function HeroSearchForm() {
  const [selectedPill, setSelectedPill] = useState("all");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedBodyType, setSelectedBodyType] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedYearFrom, setSelectedYearFrom] = useState(null);
  const [selectedYearTo, setSelectedYearTo] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const navigate = useNavigate();

  const setFilter = useSearchStore((s) => s.setFilter);

  const filteredYearToOptions = selectedYearFrom
    ? yearsList.filter((y) => y.value > selectedYearFrom.value)
    : yearsList;

  useEffect(() => {
    setSelectedModel(null);
  }, [selectedMake]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (selectedMake) {
      setFilter("make", selectedMake);
    }
    if (selectedBodyType) {
      setFilter("bodyTypes", [selectedBodyType.label]);
    }
    if (selectedModel) {
      setFilter("make", selectedModel);
    }
    if (selectedLocation) {
      setFilter("make", selectedLocation);
    }
    if (selectedYearFrom) {
      setFilter("yearFrom", selectedYearFrom.value);
    }
    if (selectedYearTo) {
      setFilter("yearTo", selectedYearTo.value);
    }
    if (minPrice) {
      setFilter("minPrice", minPrice);
    }
    if (maxPrice) {
      setFilter("maxPrice", maxPrice);
    }

    navigate("/find");
  };

  return (
    <div className={styles.formWrap}>
      <Pills selected={selectedPill} onChange={setSelectedPill} />
      <form className={styles.form}>
        <div className={styles.formContainer}>
          <InputSelect
            placeholder="Make"
            options={carData.makes}
            onChange={setSelectedMake}
            value={selectedMake}
          />
          <InputSelect
            placeholder="Models"
            options={
              selectedMake ? carData.models[selectedMake.value] || [] : []
            }
            value={selectedModel}
            onChange={setSelectedModel}
            disabled={!selectedMake}
          />
          <InputSelect
            placeholder="Body type"
            options={bodyTypeData}
            value={selectedBodyType}
            onChange={setSelectedBodyType}
          />
          <InputSelect
            placeholder="Location"
            options={locationsList}
            value={selectedLocation}
            onChange={setSelectedLocation}
          />
          <div className={styles.inputWrap}>
            <InputSelect
              placeholder="Year from"
              options={yearsList}
              value={selectedYearFrom}
              onChange={setSelectedYearFrom}
              shortLeftStyle={true}
            />
            <InputSelect
              placeholder="Year to"
              options={filteredYearToOptions}
              value={selectedYearTo}
              onChange={setSelectedYearTo}
              disabled={!selectedYearFrom}
              shortRightStyle={true}
            />
          </div>
          <div className={styles.inputWrap}>
            <TextInput
              placeholder="Price from"
              value={minPrice}
              onChange={setMinPrice}
              shortLeftStyle={true}
              icon={<DollarIcon />}
              type={"number"}
            />
            <TextInput
              placeholder="Price to"
              value={maxPrice}
              onChange={setMaxPrice}
              shortRightStyle={true}
              icon={<DollarIcon />}
              type={"number"}
            />
          </div>
        </div>
        <div className={styles.formButtons}>
          <Button
            iconLeft={<SearchIcon />}
            onClick={(e) => handleSubmitForm(e)}
          >
            Search
          </Button>
          <Link className={styles.formLink} to="/search">
            Advanced search <ArrowRight />
          </Link>
        </div>
      </form>
    </div>
  );
}
