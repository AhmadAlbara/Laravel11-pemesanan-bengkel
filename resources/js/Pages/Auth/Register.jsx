import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/Elements/InputError";
import InputLabel from "@/Components/Elements/InputLabel";
import PrimaryButton from "@/Components/Elements/PrimaryButton";
import TextInput from "@/Components/Elements/TextInput";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";

export default function Register() {
const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    password_confirmation: "",
    nama_customer: "",
    alamat: "",
    jenis_kelamin: "L",
});

useEffect(() => {
    return () => {
        reset("password", "password_confirmation");
    };
}, []);

  const submit = (e) => {
      e.preventDefault();

      post(route("register"));
  };


    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel htmlFor="nama_customer" value="Nama Customer" />

                    <TextInput
                        id="nama_customer"
                        type="text"
                        name="nama_customer"
                        value={data.nama_customer}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("nama_customer", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.nama_customer}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="alamat" value="Alamat" />

                    <TextInput
                        id="alamat"
                        type="text"
                        name="alamat"
                        value={data.alamat}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("alamat", e.target.value)}
                        required
                    />

                    <InputError message={errors.alamat} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="jenis_kelamin" value="Jenis Kelamin" />

                    <select
                        id="jenis_kelamin"
                        name="jenis_kelamin"
                        value={data.jenis_kelamin}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("jenis_kelamin", e.target.value)
                        }
                        required
                    >
                        <option value="L">Male</option>
                        <option value="P">Female</option>
                    </select>

                    <InputError
                        message={errors.jenis_kelamin}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
