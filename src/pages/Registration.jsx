import { useState } from "react";

function Registration() {
    const [fullName, setFullName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [collegeSelect, setCollegeSelect] = useState("");
    const [trackOption, setTrackOption] = useState("");
    const [termsAccept, setTermsAccept] = useState(false);

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};

        if (fullName.trim() === "") {
            newErrors.fullName = "Full name is required";
        }
        if (!/^\S+@\S+\.\S+$/.test(emailAddress)) {
            newErrors.emailAddress = "Enter a valid email address";
        }
        if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
            newErrors.phoneNumber = "Enter a valid 10-digit mobile number";
        }
        if (!collegeSelect) {
            newErrors.collegeSelect = "Please select your institution";
        }
        if (!trackOption) {
            newErrors.trackOption = "Please select a primary track";
        }
        if (!termsAccept) {
            newErrors.termsAccept = "You must agree to the terms";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
        }
    }

    if (submitted) {
        return (
            <main>
                <section id="register">
                    <h2>Registration Desk</h2>
                    <p>
                        Thank you, <strong>{fullName}</strong>!
                    </p>
                    <p>Your registration pass has been secured successfully.</p>
                </section>
            </main>
        );
    }

    return (
        <main>
            <section id="register">
                <h2>Registration Desk</h2>
                <p>Enter your details below to secure your event pass.</p>
                <br />

                <form
                    id="registrationForm"
                    onSubmit={handleSubmit}
                    autoComplet="on"
                >
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    {errors.fullName && (
                        <small class="error-message" id="fullNameError">
                            {errors.fullName}
                        </small>
                    )}

                    <label htmlFor="emailAddress">
                        Academic Email Address *
                    </label>
                    <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                    />
                    {errors.emailAddress && (
                        <small class="error-message" id="emailAddressError">
                            {errors.emailAddress}
                        </small>
                    )}

                    <label htmlFor="phoneNumber">Contact Phone Number *</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {errors.phoneNumber && (
                        <small class="error-message" id="phoneNumberError">
                            {errors.phoneNumber}
                        </small>
                    )}

                    <label htmlFor="collegeSelect">
                        Institution / University Branch *
                    </label>
                    <select
                        id="collegeSelect"
                        name="collegeSelect"
                        value={collegeSelect}
                        onChange={(e) => setCollegeSelect(e.target.value)}
                    >
                        <option value="">
                            -- Choose your current location --
                        </option>
                        <option value="internal">MBCET - Base Campus</option>
                        <option value="external_regional">
                            Affiliated Regional Centers
                        </option>
                        <option value="external_national">
                            International / National Visitors
                        </option>
                    </select>
                    {errors.collegeSelect && (
                        <small class="error-message">
                            {errors.collegeSelect}
                        </small>
                    )}

                    <label>Primary Track Focus *</label>
                    <div className="event-options-group">
                        <label>
                            <input
                                type="radio"
                                name="trackOption"
                                value="Coding Contest"
                                checked={trackOption === "Coding Contest"}
                                onChange={(e) => setTrackOption(e.target.value)}
                            />{" "}
                            Coding Contest (Technical) - ₹100
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="trackOption"
                                value="Web Dev Workshop"
                                checked={trackOption === "Web Dev Workshop"}
                                onChange={(e) => setTrackOption(e.target.value)}
                            />{" "}
                            Web Dev Workshop (Workshop) - ₹300
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="trackOption"
                                value="Robotics Challenge"
                                checked={trackOption === "Robotics Challenge"}
                                onChange={(e) => setTrackOption(e.target.value)}
                            />{" "}
                            Robotics Challenge (Technical) - ₹700
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="trackOption"
                                value="Cultural Night"
                                checked={trackOption === "Cultural Night"}
                                onChange={(e) => setTrackOption(e.target.value)}
                            />{" "}
                            Cultural Night (Cultural) - Free
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="trackOption"
                                value="Football Tournament"
                                checked={trackOption === "Football Tournament"}
                                onChange={(e) => setTrackOption(e.target.value)}
                            />{" "}
                            Football Tournament (Sports) - ₹150
                        </label>
                    </div>
                    {errors.trackOption && (
                        <small class="error-message">
                            {errors.trackOption}
                        </small>
                    )}

                    <label>Safety & Logistics Terms *</label>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="termsAccept"
                                checked={termsAccept}
                                onChange={(e) =>
                                    setTermsAccept(e.target.checked)
                                }
                            />{" "}
                            I declare that all engineering components deployed
                            align with safety parameters.
                        </label>
                    </div>
                    {errors.termsAccept && (
                        <small class="error-message">
                            {errors.termsAccept}
                        </small>
                    )}

                    <button type="submit" className="btn">
                        Submit Registration
                    </button>
                </form>
            </section>
        </main>
    );
}

export default Registration;
