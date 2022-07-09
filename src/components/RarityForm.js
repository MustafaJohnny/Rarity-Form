import React from "react";
import useValidation from "./use-Validation";
import { useReducer, useState } from "react";

const RarityForm = () => {
  const {
    emailError,
    setEmailError,
    collectionError,
    discordError,
    setDiscordError,
    setCollectionError,
    descriptionError,
    setDescriptionError,
    revealError,
    idTicketError,
    setIdTicketError,
    setRevealError,
  } = useValidation();

  const initialState = {
    email: "",
    name_of_collection: "",
    link_to_operaSea_collection: "",
    discord_server_link: "",
    twitter_link: "",
    website_link: "",
    description_of_collection: "",
    collection_based_on: "",
    smart_contract_address: "",
    when_is_your_collections_presale: "",
    When_is_your_collections_public_sale: "",
    When_are_you_planning_to_reveal: "",
    user_image: "",
    Do_you_want_your_collection_to_appear_on_our_upcoming_list: "",
    Do_you_want_your_collection_to_be_featured: "",
    discord_tag: "",
    the_ticket_id: "",
    inform_us_about_something: "",
    do_you_agree_if_there_will_be_a_fee: "",
  };

  /////////////////////////////////////////////////////////////////////////////////////

  const reducer = (state, action) => {
    if (action.type === "email") {
      return { ...state, email: action.value };
    }

    if (action.type === "collection-name") {
      return { ...state, name_of_collection: action.value };
    }

    if (action.type === "user-image") {
      return { ...state, user_image: action.value };
    }

    if (action.type === "operaSea") {
      return { ...state, link_to_operaSea_collection: action.value };
    }

    if (action.type === "discordServer") {
      return { ...state, discord_server_link: action.value };
    }

    if (action.type === "twitter") {
      return { ...state, twitter_link: action.value };
    }

    if (action.type === "website-link") {
      return { ...state, website_link: action.value };
    }

    if (action.type === "description") {
      return { ...state, description_of_collection: action.value };
    }

    if (action.type === "collection-based") {
      return { ...state, collection_based_on: action.value };
    }

    if (action.type === "smart-contract") {
      return { ...state, smart_contract_address: action.value };
    }

    if (action.type === "presale") {
      return { ...state, when_is_your_collections_presale: action.value };
    }

    if (action.type === "public-sale") {
      return { ...state, When_is_your_collections_public_sale: action.value };
    }

    if (action.type === "reveal") {
      return { ...state, When_are_you_planning_to_reveal: action.value };
    }

    if (action.type === "upcoming-list") {
      return {
        ...state,
        Do_you_want_your_collection_to_appear_on_our_upcoming_list:
          action.value,
      };
    }

    if (action.type === "be-featured") {
      return {
        ...state,
        Do_you_want_your_collection_to_be_featured: action.value,
      };
    }

    if (action.type === "discord-tag") {
      return { ...state, discord_tag: action.value };
    }

    if (action.type === "ticket-id") {
      return { ...state, the_ticket_id: action.value };
    }

    if (action.type === "inform-us") {
      return { ...state, inform_us_about_something: action.value };
    }

    if (action.type === "fee") {
      return { ...state, do_you_agree_if_there_will_be_a_fee: action.value };
    }

    if (action.type === "clean") {
      return {
        ...state,
        when_is_your_collections_presale: "",
        twitter_link: "",
        email: "",
        name_of_collection: "",
        link_to_operaSea_collection: "",
        discord_server_link: "",
        website_link: "",
        description_of_collection: "",
        collection_based_on: "",
        smart_contract_address: "",
        When_is_your_collections_public_sale: "",
        When_are_you_planning_to_reveal: "",
        user_image: "",
        Do_you_want_your_collection_to_appear_on_our_upcoming_list: "",
        Do_you_want_your_collection_to_be_featured: "",
        discord_tag: "",
        the_ticket_id: "",
        inform_us_about_something: "",
        do_you_agree_if_there_will_be_a_fee: "",
      };
    }

    return state;
  };

  /////////////////////////////////////////////////////////////////////

  const [userData, dispatch] = useReducer(reducer, initialState);
  const [otherValue, setOtherValue] = useState("");
  const [checkedUpComing, setUpComing] = useState({ Yes: false, No: false });
  const [checkedFeatured, setFeatured] = useState({ Yes: false, No: false });
  const [checkedFee, setCheckedFee] = useState({ Yes: false, No: false });
  const [checked, setChecked] = useState({
    Polygon: false,
    ETH: false,
    Solona: false,
  });

  const getOtherValue = (event) => {
    setOtherValue(event.target.value);
    dispatch({ type: "collection-based", value: event.target.value });
  };

  const getImage = (event) => {
    dispatch({ type: "user-image", value: event.target.files[0] });
  };

  const getChecked = (event) => {
    dispatch({ type: "collection-based", value: event.target.value });
    setChecked(() => {
      return {
        ETH: false,
        Polygon: false,
        Solona: false,
        [event.target.value]: true,
      };
    });
  };

  const unCheckOptions = () => {
    setChecked(() => ({
      ETH: false,
      Polygon: false,
      Solona: false,
      Other: false,
    }));
  };

  const getCheckedUpcomingList = (event) => {
    dispatch({ type: "upcoming-list", value: event.target.value });
    setUpComing(() => {
      return {
        Yes: false,
        No: false,
        [event.target.value]: true,
      };
    });
  };

  const getCheckedFeatured = (event) => {
    dispatch({ type: "be-featured", value: event.target.value });
    setFeatured(() => {
      return {
        Yes: false,
        No: false,
        [event.target.value]: true,
      };
    });
  };

  const getCheckedFee = (event) => {
    dispatch({ type: "fee", value: event.target.value });
    setCheckedFee(() => {
      return {
        Yes: false,
        No: false,
        [event.target.value]: true,
      };
    });
  };
  ////////////////////////////////////////////////////////////////////////
  /////////// Validation ///////////////

  /////////////////////////////////////

  const cleanFunction = () => {
    setChecked(() => ({
      ETH: false,
      Polygon: false,
      Solona: false,
    }));

    setUpComing(() => ({
      Yes: false,
      No: false,
    }));

    setFeatured(() => ({
      Yes: false,
      No: false,
    }));

    setCheckedFee(() => ({
      Yes: false,
      No: false,
    }));

    setOtherValue("");

    dispatch({ type: "clean" });
  };

  ///////////////////////////////////////////////////////////////////////

  async function updateData() {
    ///// Validate Submit /////

    if (!userData.email) {
      alert("Please enter your email.");
      return;
    }

    if (!userData.name_of_collection) {
      alert("Please enter the name of your collection.");
      return;
    }

    if (!userData.description_of_collection) {
      alert("Please provide a short description of your collection.");
      return;
    }

    if (!userData.collection_based_on) {
      alert("Please Enter What is your collection based on?");
      return;
    }

    if (!userData.When_are_you_planning_to_reveal) {
      alert("Please Enter When are you planning to reveal?");
      return;
    }

    if (!userData.Do_you_want_your_collection_to_appear_on_our_upcoming_list) {
      alert(
        "Please Enter Do you want your collection to appear on our upcoming list?"
      );
      return;
    }

    if (!userData.Do_you_want_your_collection_to_appear_on_our_upcoming_list) {
      alert("Please Enter Do you want your collection to be featured?");
      return;
    }

    if (!userData.discord_tag) {
      alert("Please enter your discord tag.");
      return;
    }

    if (!userData.the_ticket_id) {
      alert("Please enter your ticket id.");
      return;
    }

    if (!userData.do_you_agree_if_there_will_be_a_fee) {
      alert("Please enter do you agree if there will be a fee");
      return;
    }

    ///// Validate submit /////

    const response = await fetch(
      "https://nify-284c9-default-rtdb.firebaseio.com/mustafa.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
    cleanFunction();
  }

  return (
    <div>
      <h1>
        Rarity<span>Form</span>
      </h1>
      <form>
        <div className="inputContainer">
          <div className="inputArea">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              onChange={(event) => {
                dispatch({ type: "email", value: event.target.value });
                if (event.target.value.includes("@") === true) {
                  setEmailError(false);
                }
              }}
              id="email"
              type="email"
              value={userData.email}
              placeholder="Your email address"
              onBlur={(event) => {
                if (event.target.value.includes("@") === false) {
                  setEmailError(true);
                }
              }}
              required
              className="inputStyle"
            />

            {/* <p className="errorMsg">This is a required question</p> */}
            {emailError && (
              <p className="errorMsg">Must be a valid email address</p>
            )}
          </div>

          <div className="inputArea">
            <label htmlFor="collection">
              What is the name of your collection?{" "}
              <span className="required">*</span>
            </label>
            <input
              onChange={(event) => {
                dispatch({
                  type: "collection-name",
                  value: event.target.value,
                });
                if (event.target.value) setCollectionError(false);
              }}
              value={userData.name_of_collection}
              id="collection"
              type="text"
              placeholder="Your answer"
              className="inputStyle"
              onBlur={(event) => {
                if (!event.target.value) setCollectionError(true);
              }}
              required
            />
            {collectionError && (
              <p className="errorMsg">This is a required question</p>
            )}
          </div>

          <div className="inputArea">
            <label htmlFor="OpenSea">
              Link to your OpenSea collection. (Leave empty if it doesn't apply)
            </label>
            <input
              id="OpenSea"
              onChange={(event) =>
                dispatch({ type: "operaSea", value: event.target.value })
              }
              value={userData.link_to_operaSea_collection}
              type="text"
              placeholder="Your answer"
              required
              className="inputStyle"
            />
          </div>

          <div className="inputArea">
            <label htmlFor="discord">
              Link to your discord server. (Leave empty if it doesn't apply)
            </label>
            <input
              onChange={(event) =>
                dispatch({ type: "discordServer", value: event.target.value })
              }
              value={userData.discord_server_link}
              id="discord"
              type="text"
              placeholder="Your answer"
              required
              className="inputStyle"
            />
          </div>

          <div className="inputArea">
            <label htmlFor="twitter">
              Link to your twitter. (Leave empty if it doesn't apply)
            </label>
            <input
              onChange={(event) =>
                dispatch({ type: "twitter", value: event.target.value })
              }
              id="twitter"
              type="text"
              value={userData.twitter_link}
              placeholder="Your answer"
              required
              className="inputStyle"
            />
          </div>

          <div className="inputArea">
            <label htmlFor="website">
              Link to your website. (Leave empty if it doesn't apply)
            </label>
            <input
              onChange={(event) =>
                dispatch({ type: "website-link", value: event.target.value })
              }
              id="website"
              type="text"
              value={userData.website_link}
              placeholder="Your answer"
              required
              className="inputStyle"
            />
          </div>

          <div className="inputArea">
            <label htmlFor="description">
              Please provide a short description of your collection.
              <span className="required">*</span>
            </label>
            <input
              onChange={(event) => {
                dispatch({ type: "description", value: event.target.value });
                if (event.target.value) setDescriptionError(false);
              }}
              id="description"
              type="text"
              value={userData.description_of_collection}
              placeholder="Your answer"
              required
              onBlur={(event) => {
                if (!event.target.value) setDescriptionError(true);
              }}
              className="inputStyle"
            />
            {descriptionError && (
              <p className="errorMsg">This is a required question</p>
            )}
          </div>

          <div className="inputArea">
            <label htmlFor="small fee">
              What is your collection based on? (Please take note that we will
              charge you a small fee if your collection must be manually added)
              <span className="required"> *</span>
            </label>
            <ul>
              <li>
                <input
                  className="radioStyle "
                  onChange={getChecked}
                  name="radiovalues"
                  value="ETH"
                  type="radio"
                  id="ETH"
                  checked={checked.ETH}
                />
                <label htmlFor="ETH">ETH</label>
              </li>
              <li>
                <input
                  className="radioStyle"
                  onChange={getChecked}
                  name="radiovalues"
                  value="Polygon"
                  type="radio"
                  id="Polygon"
                  checked={checked.Polygon}
                />
                <label htmlFor="Polygon">Polygon</label>
              </li>
              <li>
                <input
                  className="radioStyle"
                  onChange={getChecked}
                  name="radiovalues"
                  value="Solona"
                  type="radio"
                  id="Solona"
                  checked={checked.Solona}
                />
                <label htmlFor="Solona">Solona</label>
              </li>
              <li>
                <label htmlFor="Other">Other:</label>
                <input
                  onChange={getOtherValue}
                  onFocus={unCheckOptions}
                  type="text"
                  className="inputStyleRadio"
                  value={otherValue}
                />
              </li>
            </ul>
          </div>

          <div className="inputArea">
            <label htmlFor="contract">
              If your collection is based on a smart contract, please provide
              the address below.
            </label>
            <input
              onChange={(event) =>
                dispatch({ type: "smart-contract", value: event.target.value })
              }
              id="contract"
              type="text"
              value={userData.smart_contract_address}
              placeholder="Your answer"
              required
              className="inputStyle"
            />
          </div>

          <div className="inputArea">
            <label htmlFor="date">
              When is your collections presale? ( Leave empty if it doesn't
              apply)
            </label>
            <span className="spanDate">Date</span>
            <input
              onChange={(event) =>
                dispatch({ type: "presale", value: event.target.value })
              }
              id="date"
              type="date"
              value={userData.when_is_your_collections_presale}
              placeholder="Your answer"
              required
              className="inputStyleDate"
            />
          </div>

          <div className="inputArea">
            <label htmlFor="date">
              When is your collections public sale? (Leave empty if it doesn't
              apply)
            </label>
            <span className="spanDate">Date</span>
            <input
              onChange={(event) =>
                dispatch({ type: "public-sale", value: event.target.value })
              }
              id="date"
              type="date"
              value={userData.When_is_your_collections_public_sale}
              placeholder="Your answer"
              required
              className="inputStyleDate"
            />
          </div>

          <div className="inputArea">
            <label htmlFor="date">
              When are you planning to reveal? (Leave empty if it doesn't apply){" "}
              <span className="required"> *</span>
            </label>
            <span className="spanDate">Date</span>
            <input
              onChange={(event) => {
                dispatch({ type: "reveal", value: event.target.value });
                if (event.target.value) setRevealError(false);
              }}
              id="date"
              type="date"
              value={userData.When_are_you_planning_to_reveal}
              placeholder="Your answer"
              required
              onBlur={(event) => {
                if (!event.target.value) setRevealError(true);
              }}
              className="inputStyleDate"
            />

            {revealError && (
              <p className="errorMsg">This is a required question</p>
            )}
          </div>

          <div className="inputArea">
            <label htmlFor="imageLoad">
              What image would you like to use? (Square aspect ratio preferred)
            </label>
            <input
              id="imageLoad"
              onChange={getImage}
              // value={userData.user_image}
              type="file"
              accept="image/png, image/jpeg"
              required
              className="inputStyleFile"
            />
          </div>

          <div className="inputArea">
            <label htmlFor="small fee">
              Do you want your collection to appear on our upcoming list?
              <span className="required"> *</span>
            </label>
            <ul>
              <li>
                <input
                  onChange={getCheckedUpcomingList}
                  className="radioStyle"
                  type="radio"
                  id="Yes"
                  name="list"
                  checked={checkedUpComing.Yes}
                  value="Yes"
                />
                <label htmlFor="Yes">Yes</label>
              </li>
              <li>
                <input
                  onChange={getCheckedUpcomingList}
                  className="radioStyle"
                  type="radio"
                  id="No"
                  name="list"
                  checked={checkedUpComing.No}
                  value="No"
                />
                <label htmlFor="No">No</label>
              </li>
            </ul>
          </div>

          <div className="inputArea">
            <label htmlFor="small fee">
              Do you want your collection to be featured? ( The starting price
              for featured listings is 0.1 ETH )
              <span className="required"> *</span>
            </label>
            <ul>
              <li>
                <input
                  onChange={getCheckedFeatured}
                  className="radioStyle"
                  name="featured"
                  type="radio"
                  id="Yes"
                  value="Yes"
                  checked={checkedFeatured.Yes}
                />
                <label htmlFor="Yes">Yes</label>
              </li>
              <li>
                <input
                  onChange={getCheckedFeatured}
                  className="radioStyle"
                  name="featured"
                  type="radio"
                  id="No"
                  value="No"
                  checked={checkedFeatured.No}
                />
                <label htmlFor="No">No</label>
              </li>
            </ul>
          </div>

          <div className="inputArea">
            <label htmlFor="tag">
              What is your Discord tag? Eg: Blob#9999
              <span className="required">*</span>
            </label>
            <input
              onChange={(event) => {
                dispatch({ type: "discord-tag", value: event.target.value });
                if (event.target.value) setDiscordError(false);
              }}
              id="tag"
              type="text"
              value={userData.discord_tag}
              placeholder="Your answer"
              required
              onBlur={(event) => {
                if (!event.target.value) setDiscordError(true);
              }}
              className="inputStyle"
            />
            {discordError && (
              <p className="errorMsg">This is a required question</p>
            )}
          </div>

          <div className="inputArea">
            <label htmlFor="ticket">
              Please make a ticket in our discord server and send your email
              address in there, and enter the ticket id here. (Join{" "}
              <a href="discord.gg/beeq5Xjkgy">discord.gg/beeq5Xjkgy</a> and go
              to the channel called #open-a-ticket)
              <span className="required">*</span>
            </label>
            <input
              onChange={(event) => {
                dispatch({ type: "ticket-id", value: event.target.value });
                if (event.target.value) setIdTicketError(false);
              }}
              id="ticket"
              type="text"
              value={userData.the_ticket_id}
              onBlur={(event) => {
                if (!event.target.value) {
                  setIdTicketError(true);
                }
              }}
              placeholder="Your answer"
              required
              className="inputStyle"
            />
            {idTicketError && (
              <p className="errorMsg">This is a required question</p>
            )}
          </div>

          <div className="inputArea">
            <label htmlFor="tag">
              If you wish to inform us about something, please type it below.
            </label>
            <input
              onChange={(event) =>
                dispatch({ type: "inform-us", value: event.target.value })
              }
              id="tag"
              type="text"
              value={userData.inform_us_about_something}
              placeholder="Your answer"
              required
              className="inputStyle"
            />
          </div>

          <div className="inputArea">
            <label htmlFor="small fee">
              Listing is free, but due to high demand, there will be a fee if
              your collection doesn't meet our minimum requirements. Do you
              agree?
              <span className="required"> *</span>
            </label>
            <ul>
              <li>
                <input
                  onChange={getCheckedFee}
                  name="fee"
                  className="radioStyle"
                  type="radio"
                  id="Yes"
                  value="Yes"
                  checked={checkedFee.Yes}
                />
                <label htmlFor="Yes">Yes</label>
              </li>
              <li>
                <input
                  onChange={getCheckedFee}
                  name="fee"
                  className="radioStyle"
                  type="radio"
                  id="No"
                  value="No"
                  checked={checkedFee.No}
                />
                <label htmlFor="No">No</label>
              </li>
            </ul>
          </div>
        </div>

        <div className="buttonsArea">
          <button onClick={updateData} className="submitButton" type="button">
            Submit
          </button>
          <button onClick={cleanFunction} className="clearButton" type="button">
            Clear form
          </button>
        </div>
      </form>
    </div>
  );
};

export default RarityForm;
