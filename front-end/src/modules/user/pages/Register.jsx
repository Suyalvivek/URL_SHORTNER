import { Box, Button, Flex, Heading, TextField, Text } from '@radix-ui/themes'
import "@radix-ui/themes/styles.css";
import { useRegister } from '../hooks/register-hook';

const Register = () => {
  const {doSubmit,register,handleSubmit,errors}=useRegister();
  return (
    <Flex
      align="center"
      justify="center"
      style={{ minHeight: "100vh", backgroundColor: "#f3f4f6" }}
    >
      <Box
        p="8"
        mx="auto"
        width="500px"
        style={{
          minHeight: "550px",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.15)"
        }}
      >
        <Heading align="center" mb="6">
          Register
        </Heading>

        <form onSubmit={handleSubmit(doSubmit)}>
          {/* Email */}
          <Box my="4">
            <Text as="label" size="3" weight="medium" htmlFor="email">
              Email
            </Text>
            <TextField.Root
              placeholder="Enter your email"
              id="email"
              type="email"
              {...register('email')}
            />
            {errors.email && <Text size="2" color="red">{errors.email.message}</Text>}
          </Box>

          {/* Password */}
          <Box my="4">
            <Text as="label" size="3" weight="medium" htmlFor="password">
              Password
            </Text>
            <TextField.Root
              placeholder="Enter your password"
              id="password"
              type="password"
              {...register('password')}
            />
            {errors.password && <Text size="2" color="red">{errors.password.message}</Text>}
          </Box>

          {/* Name */}
          <Box my="4">
            <Text as="label" size="3" weight="medium" htmlFor="name">
              Name
            </Text>
            <TextField.Root placeholder="Enter your name" id="name" type="text"  {...register('name')}/>
            {errors.name && <Text size="2" color="red">{errors.name.message}</Text>}
          </Box>

          {/* Buttons */}
          <Flex gap="4" mt="6" justify="center">
            <Button size="3" type="submit">
              Register
            </Button>
            <Button size="3" variant="outline">
              Forgot
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  )
}

export default Register