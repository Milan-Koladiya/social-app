import React from 'react'

export default function Registration() {
    return (
        <div >
            <form method='post' encType='multipart/form-data'>
                <table border='2'>
                    <tr>
                        <td>Firstname</td>
                        <td>
                            <input type='text' placeholder='Enter FirstName' name='firstname' />
                        </td>
                    </tr>
                    <tr>
                        <td>Lastname</td>
                        <td>
                            <input type='text' placeholder='Enter Lastname' name='lastname' />
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input type='email' placeholder='Example:abc123@gmail.com' name='email' />
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type='password' placeholder='Enter Password' name='password' />
                        </td>
                    </tr>
                    <tr>
                        <td>Photo</td>
                        <td>
                            <input type='file' name='image' />
                        </td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td>
                            <input type='text' placeholder='Enter Username' name='username ' />
                        </td>
                    </tr>
                    <tr>
                        <td>DOB</td>
                        <td>
                            <input type='date' name='date' />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button>Submit</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
