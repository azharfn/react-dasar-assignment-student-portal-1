const Form = () => {
    return (
        <div className="grid-container">
            <div className="grid-item">
                <form id="form-student">
                <div className="form-group">
                <label htmlFor="input-name">Fullname</label>
                <input type="text" id="input-name" name="fullname" />
                </div>
                <div className="flex-container">
                    <div className="form-group">
                        <label htmlFor="input-date">Birth Date</label>
                        <input type="date" id="input-date" name="birthdate" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-gender">Gender</label>
                        <select name="gender" id="input-gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="input-prody">Program Study</label>
                    <select name="program-study" id="input-prody">
                        <option>Ekonomi</option>
                        <option>Manajemen</option>
                        <option>Akuntansi</option>
                        <option>Administrasi Publik</option>
                        <option>Administrasi Bisnis</option>
                        <option>Hubungan Internasional</option>
                        <option>Teknik Sipil</option>
                        <option>Arsitektur</option>
                        <option>Matematika</option>
                        <option>Fisika</option>
                        <option>Informatika</option>
                    </select>
                </div>
                    <input type="submit" value="Add student" id="add-btn" />
            </form>
        </div>
    </div>

    );
};


            export default Form;
