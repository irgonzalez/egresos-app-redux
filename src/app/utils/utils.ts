import Swal from 'sweetalert2';

export function showError(message: string){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message || 'Something went wrong!'
    })
}

export function loading(message: string){
    Swal.fire({
        title: 'Login',
        html: message
    })
}

export function stopLoading(){
    Swal.close()
}