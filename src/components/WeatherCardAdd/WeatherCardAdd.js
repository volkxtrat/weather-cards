import React, { useState } from "react";

import Card from "../Ui/Card/Card";
import Input from "../Ui/Input/Input";

import classes from "./WeatherCardAdd.module.scss";

export default function WeatherCardAdd({ fetch, onClick, isAdd, error }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch(value);
    setValue("");
  }
  return (
    <>
      <Card button onClick={!isAdd && onClick}>
        {isAdd ? (
          <Card.Content>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Input
                required
                placeholder="city name"
                autoFocus
                type="text"
                onChange={handleChange}
                value={value}
              />
            </form>
          </Card.Content>
        ) : (
          <Card.Content>
            <div className={classes.wrapperAdd}>
              <span className={classes.addIcon}>
                <i className="fas fa-plus" />
              </span>
              <Card.Header>Add new card</Card.Header>
            </div>
          </Card.Content>
        )}
      </Card>
      {error && <span className={classes.error}>{error}</span>}
    </>
  );
}

WeatherCardAdd.defaultProps = {
  onClick: null
};
