import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'


export default function Register() {
    return (
        <section className='flex items-center justify-center h-screen'>
            <div className='p-8 flex flex-row w-1/3 bg-white drop-shadow-lg rounded-xl'>
                <FormControl className='space-y-4'>
                    <h3 className='font-semibold text-center text-xl'>Регистрация</h3>
                    <Input placeholder='Имя'></Input>
                    <Input placeholder='Email'></Input>
                    <Input placeholder='Пароль'></Input>
                    <Button colorScheme='blue'>Зарегистрироваться</Button>
                </FormControl>
            </div>
        </section>
    )
}


