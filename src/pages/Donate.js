import React from "react";
import "../styles/Pages.css";

function Donate() {
    return (
        <div class="dimage">

            <h2>Support Us Today</h2>
            <div class="donate">
                <form>
                    <label for="fname">First Name</label>
                    <input type="text" class="form1" id="fname" name="firstname" placeholder="Your name.." />

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" class="form1" name="lastname" placeholder="Your last name.." />

                    <label for="level">level</label>
                    <select id="level" name="level">
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="Alumni">Alumni </option>



                    </select>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>


    );
}

export default Donate;