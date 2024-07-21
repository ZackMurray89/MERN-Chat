import bcrypt from 'bcryptjs'

import User from '../Models/user.model.js'

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body

    if (password !== confirmPassword) {
      return res.status(400).json({
        error: 'Passwords Do Not Match',
      })
    }

    const user = await User.findOne({
      username,
    })

    if (user) {
      return res.status(400).json({
        error: 'Username Already Exists',
      })
    }

    // Hash Password Here
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // https://avatar-placeholder.iran.liara.run (Profile Pic Placeholder/Default)
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = await User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === 'Male' ? boyProfilePic : girlProfilePic,
    })

    if (newUser) {
      // Generate JWT Token

      newUser.save()

      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullName,
        username: newUser.username,
        porfilePic: newUser.profilePic,
      })
    } else {
      res.status(400).json({ error: 'Invalid User Data' })
    }
  } catch (error) {
    console.log('Error Signing Up New User', error.message)
    res.status(500).json({
      error: 'Internal Server Error',
    })
  }
}

export const login = (req, res) => {
  console.log('Login User')
}

export const logout = (req, res) => {
  console.log('Logout User')
}
