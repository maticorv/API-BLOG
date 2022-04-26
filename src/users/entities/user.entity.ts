import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import Post from 'src/posts/entities/post.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column({ nullable: true })
  @Exclude()
  public password?: string;

  @Column({ nullable: true })
  public phone?: string;

  @Column({ nullable: true })
  public ip?: string;

  //   @OneToMany(() => Post, (post: Post) => post.author)
  //   public posts?: Post[];

  //   @Column({ nullable: true })
  //   public avatarId?: number;

  //   @Column({
  //     nullable: true
  //   })
  //   @Exclude()
  //   public currentHashedRefreshToken?: string;

  @Column({ default: false })
  public isEmailConfirmed: boolean;

  @OneToMany(() => Post, (post: Post) => post.author)
  public posts: Post[];
}

export default User;
