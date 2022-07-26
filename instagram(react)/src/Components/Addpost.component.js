import React from 'react'

export default function Addpost() {
    return (
        <div>
            <form method='post' encType='multipart/form-data'>
                <table border='2'>
                    <tr>
                        <td>Image</td>
                        <td>
                            <input type='file' name='image' />
                        </td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>
                            <textarea rows='5' cols='25'></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colspan='2'>
                            <button>Addpost</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
