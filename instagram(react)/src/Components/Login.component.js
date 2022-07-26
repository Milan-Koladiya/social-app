import React from 'react'

export default function Login() {
    return (
        <div>
            <form method='post'>
                <table border='2'>
                    <tr>
                        <td>Username</td>
                        <td>
                            <input type='text' placeholder='Enter Username' name='username' />
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type='password' placeholder='Enter Password' name='password' />
                        </td>
                    </tr>
                    <tr>
                        <td colspan='2'>
                            <button>Login</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
