import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { TypesModalAuth } from "core/enums/index";
import ButtonCustom from "components/ButtonCustom/ButtonCustom";
import { IModalAuthProps } from "core/interfaces/props/index";
import style from "./style.module.scss";

const styles = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface IInputValues {
  email: string;
  password: string;
}

type FormData = {
  email: string;
  password: string;
};

const ModalAuth: React.FC<IModalAuthProps> = ({ isOpen, onClose, type }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data, errors);

  const [values, setValues] = useState<IInputValues>({
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <h3 className={style.title}>
            {type === TypesModalAuth.sign ? "Sign In to Fiverr" : "Join Fiverr"}
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <input
              {...register("email", {
                required: "Email  is required",
                pattern:
                  /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/u,
              })}
              onChange={(e) => onChange(e)}
              value={values.email}
              className={
                errors.email ? style.inputFieldError : style.inputField
              }
              placeholder={
                type === TypesModalAuth.sign ? "Email" : "Enter your email"
              }
            />
            {errors.email && (
              <h4 className={style.errorMessage}>Wrong email</h4>
            )}

            {type === TypesModalAuth.sign && (
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: 4,
                })}
                onChange={(e) => onChange(e)}
                value={values.password}
                className={style.inputField}
                placeholder={"Password"}
              />
            )}
            {errors.password && (
              <h4 className={style.errorMessage}>Incorrect peassword</h4>
            )}
            <ButtonCustom type={"submit"} text={"submit"} />
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAuth;
