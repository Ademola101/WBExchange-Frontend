export const useUser = () => {
    const user = JSON.parse(localStorage.getItem('wb-staff-user') as string)
    console.log(user)
    return user
}