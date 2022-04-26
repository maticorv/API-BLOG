import User from 'src/users/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToOne,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public title: string;

  @Column('text', { array: true })
  public paragraphs: string[];

  @DeleteDateColumn()
  public deletedAt: Date;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
 
  @ManyToOne(() => User, (author: User) => author.posts)
  public author: User;
}
export default Post;
