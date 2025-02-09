function ContactMe() {

    return (<form id="contactContainer">
        <div className="form-group">
            <input type="text" placeholder="" name="name" id="name" className="cInput" autoComplete="off" required />
            <label for="name" className="cLabel">Name</label>
        </div>

        <div className="form-group">
            <input type="email" placeholder="" name="email" id="email" className="cInput" required />
            <label for="email" className="cLabel">Email</label>
        </div>

        <textarea className="cComment" placeholder="Comment"></textarea>
        <input type="submit" id="submitBtn" />
    </form>)
}

export default ContactMe;